-- 1. Enable the pg_net extension (required for making HTTP requests from Postgres)
create extension if not exists pg_net;

-- 2. Create the trigger function that calls the Edge Function
create or replace function public.on_contact_submission_insert()
returns trigger
language plpgsql
security definer
as $$
declare
  request_id bigint;
begin
  select net.http_post(
    url := 'https://yqkpmvxpsxgnmlvgkext.supabase.co/functions/v1/notify-contact-submission',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object(
      'record', jsonb_build_object(
        'name', new.name,
        'email', new.email,
        'project_type', new.project_type,
        'message', new.message
      )
    )
  ) into request_id;

  return new;
end;
$$;

-- 3. Bind the trigger function to the contact_submissions table
drop trigger if exists on_contact_submission_insert_trigger on public.contact_submissions;

create trigger on_contact_submission_insert_trigger
after insert on public.contact_submissions
for each row
execute function public.on_contact_submission_insert();

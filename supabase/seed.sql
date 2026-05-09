insert into public.categories (name, slug)
values
  ('Puzzle Books', 'puzzle-books'),
  ('Logic Books', 'logic-books'),
  ('Science Books', 'science-books'),
  ('Activity Books', 'activity-books'),
  ('Islamic Learning', 'islamic-learning'),
  ('Brain Development', 'brain-development'),
  ('Creative Writing', 'creative-writing'),
  ('Preschool Learning', 'preschool-learning')
on conflict (slug) do nothing;

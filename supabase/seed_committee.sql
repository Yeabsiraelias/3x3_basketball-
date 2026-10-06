-- ==============================================================================
-- 3x3 ETHIOPIA - OFFICIAL LEADERSHIP COMMITTEE SEED & UPDATE SCRIPT
-- Updates and inserts the 9-member official leadership & technical committee into staff_and_officials
-- ==============================================================================

-- Update existing records if already populated:
UPDATE staff_and_officials SET role = 'FIBA Certified Project director' WHERE full_name = 'Tamrat Alemu Befekadu';
UPDATE staff_and_officials SET role = 'FIBA Certified 3x3 Ethiopia international relation & Communication' WHERE full_name = 'Blen Asrat Kebede';
UPDATE staff_and_officials SET role = 'FIBA Certified Event operation Lead' WHERE full_name = 'Brook Hailu Yamane';
UPDATE staff_and_officials SET role = 'FIBA Certified Youth Dev''t Lead' WHERE full_name = 'Robel Alemu Ayele';
UPDATE staff_and_officials SET role = 'FIBA 3x3 Ethiopia Finance & Commercial Lead' WHERE full_name = 'Lydia Eshetu Dula';
UPDATE staff_and_officials SET role = 'Global digital Marketer' WHERE full_name = 'Yeabsira Elias';
UPDATE staff_and_officials SET role = 'FIBA 3x3 Ethiopia Social media Delegate' WHERE full_name = 'Yabts Yonas Jima';
UPDATE staff_and_officials SET role = 'FIBA 3x3 Diaspora & Women in sport Delegate' WHERE full_name = 'Selamawit Kassahun Yosef';
UPDATE staff_and_officials SET role = 'FIBA 3x3 Global strategy & Diaspora Delegate' WHERE full_name = 'Yamlak Menase';

-- Fresh Insert query for initial seed or reset:
INSERT INTO staff_and_officials (full_name, role, certification_status)
VALUES 
  ('Tamrat Alemu Befekadu', 'FIBA Certified Project director', true),
  ('Blen Asrat Kebede', 'FIBA Certified 3x3 Ethiopia international relation & Communication', true),
  ('Brook Hailu Yamane', 'FIBA Certified Event operation Lead', true),
  ('Robel Alemu Ayele', 'FIBA Certified Youth Dev''t Lead', true),
  ('Lydia Eshetu Dula', 'FIBA 3x3 Ethiopia Finance & Commercial Lead', true),
  ('Yeabsira Elias', 'Global digital Marketer', true),
  ('Yabts Yonas Jima', 'FIBA 3x3 Ethiopia Social media Delegate', true),
  ('Selamawit Kassahun Yosef', 'FIBA 3x3 Diaspora & Women in sport Delegate', true),
  ('Yamlak Menase', 'FIBA 3x3 Global strategy & Diaspora Delegate', true)
ON CONFLICT DO NOTHING;

-- Verification query
SELECT official_id, full_name, role, certification_status, created_at 
FROM staff_and_officials 
ORDER BY created_at DESC 
LIMIT 9;

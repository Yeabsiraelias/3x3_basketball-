-- ==============================================================================
-- 3x3 ETHIOPIA - OFFICIAL LEADERSHIP COMMITTEE SEED SCRIPT
-- Inserts the 9-member official leadership & technical committee into staff_and_officials
-- ==============================================================================

-- Direct insert query as requested:
INSERT INTO staff_and_officials (full_name, role, certification_status)
VALUES 
  ('Tamrat Alemu Befekadu', 'Tournament Director', true),
  ('Blen Asrat Kebede', 'Tournament Director', true),
  ('Brook Hailu Yemane', 'Table Official', true),
  ('Robel Alemu Ayele', 'Table Official', true),
  ('Lidiya Eshetu Dula', 'Table Official', true),
  ('Yeabsira Elias', 'Tournament Director', true),
  ('Yabtse Yonas Jima', 'Table Official', true),
  ('Selamawit Kassahun Yosef', 'Tournament Director', true),
  ('Yamlak Menase', 'Tournament Director', true);

-- Verification query
SELECT official_id, full_name, role, certification_status, created_at 
FROM staff_and_officials 
ORDER BY created_at DESC 
LIMIT 9;

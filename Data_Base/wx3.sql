CREATE OR REPLACE FUNCTION update_sale()
  RETURNS trigger AS
$$
BEGIN
 insert into employe_audit(id,salare) values (new.id,new.salare);
RETURN NEW;
END;
$$

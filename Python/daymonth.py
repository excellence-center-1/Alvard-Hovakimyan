class AmericanDate():
    def __init__(self,yyyy,mm,dd):
        self.yyyy = yyyy
        self.mm = mm
        self.dd = dd
    def set_day(self,dd1):
        self.dd = dd1
    def set_year(self,yyyy1):
        self.yyyy = yyyy1
    def set_month(self,mm1):
        self.mm = mm1
    def get_day(self):
        return self.dd
    def get_year(self):
        return self.yyyy
    def get_month(self):
        return self.mm
    def format(self):
        if self.mm < 10:
            return f"{'0'+str(self.mm)}.{self.dd}.{self.yyyy}"
        else:
            return f"{str(self.mm)}.{str(self.dd)}.{str(self.yyyy)}"
class EuropeanDate():
    def __init__(self,yyyy,mm,dd):
        self.yyyy = yyyy
        self.mm = mm
        self.dd = dd
    def set_day(self,dd1):
        self.dd = dd1
    def set_year(self,yyyy1):
        self.yyyy = yyyy1
    def set_month(self,mm1):
        self.mm = mm1
    def get_day(self):
        return self.dd
    def get_year(self):
        return self.yyyy
    def get_month(self):
        return self.mm
    def format(self):
        if self.mm < 10:
            return f"{self.dd}.{'0'+str(self.mm)}.{self.yyyy}"
        else:
            return f"{str(self.dd)}.{str(self.mm)}.{str(self.yyyy)}"

american = AmericanDate(2000, 4, 10)
european = EuropeanDate(2000, 4, 10)
print(american.format())
print(european.format())

class Person():
    def __init__(self,name,snume,deadname,phone):
        p = {}
        self.name = name
        self.snume = snume
        self.deadname = deadname
        self.phone = phone
    def get_name(self):
        return f"{self.name}' '{self.self}' '{self.deadname}"
    def get_phone(self):
        if 'private' in self.phone :
            return self.phone.keys('private')
        else:
            return None
    def get_work_phone(self):
        if 'work' in self.phone :
            return self.phone.keys('work')
        else:
            return None
    def get_sms_text(self):
        return f"Dear {self.name} {self.sname}! Take part in our win-win competition for individuals"
class Company():
    def __init__(self,name,tupe,phons,person,personn):
        self.name = name
        self.tupe = tupe
        self.phons = phons
        self.person = person
        self.personn = personn
    def get_name(self):
        return name
    def get_phone(self):
        if 'contact' in self.phone :
            return self.phone.keys('contact')
        else:
            return None
    def get_sms_text(self):
        return f"For company {self.name} there is a super offer! Take part in our win-win competition for {self.tupe}"
person1 = Person("Ivan", "Ivanovich", "Ivanov", {"private": 123, "work": 456}) Failed to send message
person2 = Person("Ivan", "Petrovich", "Petrov", {"private": 789})
Failed to send message
person3 = Person("Ivan", "Petrovich", "Sidorov", {"work": 789})
SMS sent to the number
person4 = Person("John", "Unknown", "Doe", {})
SMS sent to the number
company1 = Company("Bell", "LP", {"contact": 111}, person3, person4)
Failed to send message
company2 = Company("Cell", "LLP", {"non_contact": 222}, person2, person3)
company3 = Company("Dell", "Ltd", {"non_contact": 333}, person2, person4)
print(send_sms(person1, person2, person3, person4, company1, company2, company3))

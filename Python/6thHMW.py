class MaxStat:
    def __init__(self):
        self.count = 0
        self.number = 0
    def add_number(self, number):
        if self.count == 0:
            self.number = number
            self.count += 1
        else:
            if self.number < number:
                self.number = number
    def result(self):
        if self.count == 0:
            return None
        return self.number
class AverageStat:
    def __init__(self):
        self.number = 0
        self.count = 0
    def add_number(self, number):
        self.number += number
        self.count += 1
    def result(self):
        if self.count == 0:
            return None
        return self.number / self.count
class MinStat:
    def __init__(self):
        self.number = 0
        self.count = 0
    def add_number(self, number):
        if self.count == 0:
            self.number = number
            self.count += 1
        else:
            if self.number > number:
                self.number = number
    def result(self):
        if self.count == 0:
            return None
        return self.number
values=[1,3,8,55]
mins = MinStat()
maxs = MaxStat()
average = AverageStat()
for v in values:
    mins.add_number(v)
    maxs.add_number(v)
    average.add_number(v)
print(mins.result(), maxs.result(), '{:<05.3}'.format(average.result()))

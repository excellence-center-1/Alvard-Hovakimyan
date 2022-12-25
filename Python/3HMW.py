class Selector():
    def __init__(self,numbers):
        self.numbers = numbers
    def get_odds(self):
        num = []
        for i in numbers:
            if i % 2 == 0:
                num.append(i)
        return num
    def get_evens(self):
        num = []
        for i in numbers:
            if i % 2 == 1:
                num.append(i)
        return num
values = [11, 12, 13, 14, 15, 16, 22, 44, 66]
selector = Selector(values)
odds = selector.get_odds()
evens = selector.get_evens()
print(' '.join(map(str, odds)))
print(' '.join(map(str, evens)))

class Table():
    def __init__(self,rows,cols):
        self.rows = rows
        self.cols = cols
        self.table = []
        for i in range(self.rows):
            k = []
            for j in range(self.cols):
                k.append(0)
            self.table.append(k)
    def get_value(self,row2,col2):
        if self.rows < row2 or row2 < 0 or col2 < 0 or self.cols < col2:
            return None
        else:
            for i in range(self.rows):
                for j in range(self.cols):
                    if i == row2 and j == col2:
                        return self.table[i][j]
    def delete_row(self,row3):
        for i in self.table:
            self.table.remove(i)
    def add_row(self,row):
        for i in range(row):
            l = []
            for j in range(self.cols):
                l.append(0)
            self.table.append(l)
    def add_cols(self,col):
        for i in range(self.rows):
            for j in range(col):
                self.table[i].append(0)

    def set_value(self,rows2,cols2,values):
        self.table[rows2][cols2] = values
    def n_rows(self):
        return self.rows
    def n_cols(self):
        return self.cols
tab = Table(3, 5)
tab.set_value(0, 1, 10)
tab.set_value(1, 2, 20)
tab.set_value(2, 3, 30)
for i in range(tab.n_rows()):
    for j in range(tab.n_cols()):
        print(tab.get_value(i, j), end=' ')
    print()
print()
tab.add_row(1)
for i in range(tab.n_rows()):
    for j in range(tab.n_cols()):
        print(tab.get_value(i, j), end=' ')
    print()
print()


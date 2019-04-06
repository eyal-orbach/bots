from db.db_manager import *

if __name__ == '__main__':
    nb = ""
    while not nb == "q":
        nb = input("Enter tweet idx:\n")
        t = Tweet.get(idx=int(nb))
        print(t.msg)

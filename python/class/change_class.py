""" Test class changing atributtes"""
from typing import Literal

class Model:
    """ Class Model """
    def __init__(self, modelname:Literal["A", "B", "C"]):
        self.model = modelname

    def get_model(self):
        """ Get model name """
        if self.model == "A":
            return "Model A"
        if self.model == "B":
            return "Model B"
        return "Model C"

    def get_random(self):
        """ Get random number """
        if self.model == "A":
            return 1
        if self.model == "B":
            return 2
        return 3

    def change_model(self, modelname:Literal["A", "B", "C"]):
        """ Change model """
        self.model = modelname

# Example usageç


model = Model("A")


def use_model():
    """ Use model """
    print(model.get_model())
    print(model.get_random())


use_model()

model.change_model("B")

use_model()

model.change_model("C")

use_model()



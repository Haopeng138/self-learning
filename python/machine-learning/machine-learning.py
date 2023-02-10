import numpy

speed = [99,86,87,88,111,86,103,87,94,78,77,85,86]

x = numpy.mean(speed)
print(x)


x = numpy.median(speed)
print(x)


from scipy import stats

x = stats.mode(speed)
print(x)


# desviación 
x = numpy.std(speed)
print(x)


# percentil 
ages = [5,31,43,48,50,41,7,11,15,39,80,82,32,2,8,6,25,36,27,61,31]

x = numpy.percentile(ages, 75)

print(x)

import matplotlib.pyplot as plt

# distribucion uniforme 
x = numpy.random.uniform(0.0, 5.0, 250)

plt.hist(x, 5)
##plt.show()

# distribucion normal
x = numpy.random.normal(5.0, 1.0, 100000)

plt.hist(x, 100)
##plt.show()

x = [5,7,8,7,2,17,2,9,4,11,12,9,6]
y = [99,86,87,88,111,86,103,87,94,78,77,85,86]

plt.scatter(x, y)
##plt.show()
### Prep-Exercises
This repository includes the Solutions of  Prep-Exercises  of HYF program


# WEEK 2
1. Which way of representing the traffic light did you find better? Why?

I think the second one since it is more readable. 

2. What happens if you change the loop to a do-while loop instead of a while loop? Why?

I tried, but nothing happened since at the beginning of the execution the values of the variables 'rotation' and 'cycle' are smaller than the condition. 
However, I know that using a do while loop is a bit risky because even if the condition in the loop is not met, the loop runs at least once.
If the values of cycle or rotation were greater than condition then do while loop would be executed even if the condition holded false.


3. We could have also used a for loop to make the traffic light do 2 full rotations. Do you think that would be better? Why or why not?
No,I don't think so . We can use both while and for loop . They do the same work .


# WEEK 3 

1. This time the loop was changed to a for loop that will run the code 6 times. Why was that needed?
Actually it will do two cycles as previous week but the code is here better .
2. Why was the trafficLight added to the main function and not left at the top of the file?

3. What do you think is the advantage of having the getCurrentTrafficLightState and getNextStateIndex functions?
You can use these functions in somewhere else .Maybe DRY principle maybe readibility.

4. The valueCounts is implemented as an array. Do you think there is another way to store this? Why do you think the decision was made to go with an array?
We can define sx different variables. But array is more efficient effective way because we can iterate through array. The decision was made to go with array because the code will be more readable , less than the other method and perfomance issues.

5. What do you think about the code division? Would you add another function or maybe remove one? Why?


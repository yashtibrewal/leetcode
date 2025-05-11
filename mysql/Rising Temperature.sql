
-- https://leetcode.com/problems/rising-temperature/description/

select t.id from Weather y cross join Weather t where datediff(t.recordDate, y.recordDate) = 1 and t.temperature > y.temperature
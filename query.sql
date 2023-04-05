SELECT 

    *,

    IF(ReportsTo IS NULL OR ReportsTo = 'Jenny Richards', 'CEO', 'None') AS `Boss Title`

FROM maintahle

WHERE ReportsTo IS NULL OR ReportsTo = 'Jenny Richards'

ORDER BY Age;

repeat
Citizen.Wait(3000)
   ExecuteCommand("rconreloadwl")
   until ExecuteCommand("rconreloadwl")
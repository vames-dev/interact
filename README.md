# vms_interact
```lua
Citizen.CreateThread(function()
    local inRange = false
    local shown = false
    while true do
       inRange = false
       local myPed = PlayerPedId()
       local myCoords = GetEntityCoords(myPed)
       local targetCoords = vec(x, y, z)
       local distance = #(myCoords - targetCoords)
       if distance < 1.5 then
   -- Probably here you have ESX.ShowHelpNotification
   -- you changing this for inRange = true like under have
           inRange = true
           if IsControlJustPressed(0, 38) then
   -- if player press button, inRange must be false to not shown on screen
             inRange = false
             TriggerServerEvent("example")
          end
       end
   -- Here is a function to work interact
       if inRange and not shown then
            shown = true
            exports["interact"]:Open("E", "Vehicle shop")
        elseif not inRange and shown then
            shown = false
            exports["interact"]:Close()
        end
       Citizen.Wait(1)
    end
end)
```

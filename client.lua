function Open(key, message)
	SendNUIMessage({action = 'open', key = key, message = message})
end

function Close()
	SendNUIMessage({action = 'close'})
end

RegisterNetEvent('interact:Open')
AddEventHandler('interact:Open', function(key, message)
	Open(key, message)
end)

RegisterNetEvent('interact:Close')
AddEventHandler('interact:Close', function()
	Close()
end)
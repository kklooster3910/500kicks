json.extract! @like, :id, :photographer_id, :photo_id

# change this to what's below so that the like ids match up with what the id
# of the like in the slice of state 

# json.likes do 
#     json.extract! @like, :id, :photographer_id, :photo_id
# end
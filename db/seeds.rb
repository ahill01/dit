puts("seeding users!")
User.create!(name:"Phoebe",username:"Phoebe_Bridgers",password:"phebz")

User.create!(name:"Lucy",username:"Lucy_Dacus",password:"nightshift")

User.create!(name:"Julien",username:"Baker_Julien",password:"SprainedAnkle221")

puts("seeding conversations")
Conversation.create!(sender_id:1,recipient_id:2)
Conversation.create!(sender_id:3,recipient_id:1)

puts("seeding messages!")
Message.create(body:"Hi there Lucy!",conversation_id:1,user_id:1)

Message.create(body:"Hi there Phoebe!",conversation_id:1,user_id:2)

Message.create(body:"hey girl hey",conversation_id:2,user_id:3)


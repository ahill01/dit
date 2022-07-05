puts("seeding users!")
 
User.create!(name:"Phoebe",username:"Phoebe_Bridgers",password:"phebz",pronouns:"she/her",gender:"female",collab_type:"band member(co-writer)",email:"phoebefuckingbridgers@phoebefuckingbridgers.com",genre:"sad girl indie",remote:false,homebase:"Los Angeles, CA",bio:"the artist currently known as phoebe bridgers")

User.create!(name:"Lucy",username:"Lucy_Dacus",password:"nightshift",pronouns:"she/her",gender:"female",collab_type:"whatever!",email:"ldacus@gmail.com",genre:"sad girl indie",remote:false,homebase:"Chicago, IL",bio:"lucky duckus")

User.create!(name:"Julien",username:"Baker_Julien",password:"SprainedAnkle221",pronouns:"she/her",gender:"female",collab_type:"band member(co-writer)",email:"julien.baker@gmail.com",genre:"sad girl indie",remote:true,homebase:"Memphis, TN",bio:"Musician from Memphis, Tennessee.")

User.create!(name:"Allison",username:"a_philharmonic",password:"musicR0cks",pronouns:"she/her",gender:"female",collab_type:"band member(co-writer)",email:"amh03160@gmail.com",genre:"indie",remote:true,homebase:"Houston, TX",bio:"just makin whatever music suits my fancy tbh")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")

User.create(name:"",username:"",password:"",pronouns:"",gender:"",collab_type:"",email:"",genre:"",remote:true,homebase:"",bio:"")


puts("seeding collab requests")
CollabRequest.create(requester_id:1,reciever_id:2,accepted:true)
CollabRequest.create(requester_id:3,reciever_id:1)
CollabRequest.create(requester_id:2,reciever_id:3)

# puts("seeding collabs")
Collab.create(collaborator_a_id: 1,collaborator_b_id:2)


puts("seeding conversations")
Conversation.create!(sender_id:2,recipient_id:1)

puts("seeding messages!")
Message.create(body:"I approved your collab request!",conversation_id:1,user_id:2)
Message.create(body:"Hi there Lucy!",conversation_id:1,user_id:1)
Message.create(body:"Hi there Phoebe!",conversation_id:1,user_id:2)

puts("seeding instruments!")
#phoebe
Instrument.create!(kind:"guitar",primary:true,user_id:1,proficiency:"advanced")
Instrument.create!(kind:"bass",user_id:1,proficiency:"advanced")
#lucy
Instrument.create!(kind:"guitar",user_id:2,primary:true,proficiency:"advanced")
Instrument.create!(kind:"keys",primary:false,user_id:2,proficiency:"advanced")
#julien
Instrument.create!(kind:"guitar",user_id:3,primary:true,proficiency:"advanced")
Instrument.create!(kind:"keys",user_id:3,proficiency:"advanced")

#allison
Instrument.create!(kind:"cello",user_id:4,proficiency:"advanced",primary:true)
Instrument.create!(kind:"bass",user_id:3,proficiency:"intermediate")
Instrument.create!(kind:"guitar",user_id:3,proficiency:"intermediate")
Instrument.create!(kind:"bass",user_id:3,proficiency:"intermediate")

puts("seeding links")
#phoebe
Link.create!(kind:"social",url:"https://www.instagram.com/phoebebridgers/",user_id:1)
Link.create!(kind:"music",url:"https://phoebebridgers.bandcamp.com/",user_id:1)

#lucy
Link.create!(kind:"social",url:"https://www.instagram.com/lucydacus/",user_id:2)
Link.create!(kind:"music",url:"https://www.youtube.com/watch?v=-4FyRybGiBc&ab_channel=NPRMusic",user_id:2)

#julien baker
Link.create!(kind:"social",url:"https://www.instagram.com/julienrbaker/",user_id:3)
Link.create!(kind:"music",url:"https://www.youtube.com/channel/UCU7v5kTKdLacf5c4KeMempQ",user_id:3)


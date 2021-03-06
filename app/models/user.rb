class User < ApplicationRecord
  has_secure_password
  validates :username, presence:true
  validates :email, presence:true
  
  has_many :conversations, :foreign_key => :sender_id
  has_many :collab_requests_as_reciever, :foreign_key => :reciever, class_name: :CollabRequest
  has_many :collab_requests_as_requester, :foreign_key => :requester, class_name: :CollabRequest

  has_many :collabs, ->(user) { where("collaborator_a_id = ? OR collaborator_b = ?", user.id, user.id) }
   has_many :collaborators, through: :collabs

  has_many :instruments
  has_many :links

  
end

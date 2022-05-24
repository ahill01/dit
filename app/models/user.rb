class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_secure_password
  has_many :conversations, :foreign_key => :sender_id
  has_one_attached :avatar
  has_many :collab_requests_as_reciever, :foreign_key => :reciever, class_name: :CollabRequest
  has_many :collab_requests_as_requester, :foreign_key => :requester, class_name: :CollabRequest

  has_many :collabs, ->(user) { where("collaborator_a_id = ? OR collaborator_b = ?", user.id, user.id) }
   has_many :collaborators, through: :collabs

  has_many :instruments
  has_many :links

  def primary_instrument
   primary = self.instruments.where(primary:true).limit(1)
   return primary.kind
  end

  def avatar_thumbnail
    if avatar.attached?
      avatar.variant(resize: "150x150!").processed 
    else 
        '/default_profile.jpg'
    end
  end
  
end

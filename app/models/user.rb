class User < ApplicationRecord
  has_secure_password
  has_many :conversations, :foreign_key => :sender_id
  has_many :instruments
  has_many :links

  
end

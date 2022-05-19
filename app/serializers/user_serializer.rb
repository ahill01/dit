class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :pronouns, :collab_type
  
  # def primary_inst
  #   byebug
  #   # return self.object.primary_instrument
  #   return "guitar"
  # end

  has_many :instruments
  has_many :links
end

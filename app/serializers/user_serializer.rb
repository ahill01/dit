class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :pronouns, :collab_type, :primary_instrument, :username, :email, :homebase, :bio
  
  def primary_instrument
    primary = self.object.instruments.where(primary:true).limit(1)
    if(primary.first) then
      return primary.first.kind
    end
    return ""
  end

  has_many :instruments
  has_many :links
end

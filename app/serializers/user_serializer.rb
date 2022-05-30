class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :pronouns, :collab_type, :primary_instrument
  
  def primary_instrument
    primary = self.object.instruments.where(primary:true).limit(1)
    return primary.first.kind
  end

  has_many :instruments
  has_many :links
end

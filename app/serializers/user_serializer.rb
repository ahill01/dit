class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :pronouns, :collab_type

  has_many :instruments
  has_many :links
end

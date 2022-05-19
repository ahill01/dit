class LinkSerializer < ActiveModel::Serializer
  attributes :id, :kind, :url
  has_one :user
end

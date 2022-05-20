class CollabRequestSerializer < ActiveModel::Serializer
  attributes :id 
  belongs_to :requester, serializer: CollabUserSerializer
  belongs_to :reciever,serializer: CollabUserSerializer
end

class CollabRequestSerializer < ActiveModel::Serializer
  attributes :id, :accepted

  byebug;
  # belongs_to :requester, serializer: CollabUserSerializer
  # belongs_to :reciever,serializer: CollabUserSerializer
end

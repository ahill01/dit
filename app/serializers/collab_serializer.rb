class CollabSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :collaborator_a, serializer: CollabUserSerializer
  belongs_to :collaborator_b, serializer: CollabUserSerializer
end

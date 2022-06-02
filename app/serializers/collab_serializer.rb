class CollabSerializer < ActiveModel::Serializer
  attributes :id, :collab_since

  def collab_since
    raw_date = self.object.created_at
    return raw_date.strftime('%m/%d/%Y')
  end

  belongs_to :collaborator_a, serializer: CollabUserSerializer
  belongs_to :collaborator_b, serializer: CollabUserSerializer
end

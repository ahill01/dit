class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :recipient

  def recipient 
    # byebug
    return User.find(self.object.recipient_id).name
  end

  has_many :messages
end

class ConversationSummarySerializer < ActiveModel::Serializer
  attributes :id, :recipient, :sender

  def recipient 
    # byebug
    return User.find(self.object.recipient_id).name
  end

  def sender
    return User.find(self.object.sender_id).name
  end

end

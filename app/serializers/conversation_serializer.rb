class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :recipient, :sender, :last_message

  def recipient 
    # byebug
    return User.find(self.object.recipient_id).name
  end

  def sender
    return User.find(self.object.sender_id).name
  end

  def last_message
    return self.object.messages.last.body
  end
end

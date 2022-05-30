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
    msg_body = self.object.messages.last.body
    msg_sender = User.find(self.object.messages.last.user_id).name
    return {:body => msg_body,:sender => msg_sender}
  end
end

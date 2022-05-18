class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :sender 

  def sender
    return User.find(self.object.user_id).name
  end
end

class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :kind, :proficiency

  has_one :user
end

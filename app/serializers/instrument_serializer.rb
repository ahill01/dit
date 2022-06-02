class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :kind, :proficiency, :primary

  has_one :user
end

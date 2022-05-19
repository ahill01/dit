class Collab < ApplicationRecord
    belongs_to :collaborator_a, class_name: :User
    belongs_to :collaborator_b, class_name: :User

end

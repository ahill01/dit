class ApplicationController < ActionController::API
include ActionController::Cookies
#add rescue froms


private
def authenticate_user
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
end

end

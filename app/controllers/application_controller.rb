class ApplicationController < ActionController::API
include ActionController::Cookies
#add rescue froms
before_action :configure_permitted_parameters, 
    if: :devise_controller?

        private
        def configure_permitted_oarameters
            devise_parameter_sanitizer.permit(:signup, keys:[:avatar])
            devise_parameter_sanitizer.permit(:account_update, keys:[:avatar])
        end

private
def authenticate_user
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
end

end

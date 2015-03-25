class UsersController < ApplicationController
  ROLES = %w[admin moderator author banned]
  load_and_authorize_resource
  skip_authorize_resource :only => [:index, :show]
end

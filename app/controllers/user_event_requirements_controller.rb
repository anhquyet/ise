class UserEventRequirementsController < ApplicationController
  attr_reader :user_event_requirement

  before_action :find_user_event_requirement
  authorize_resource

  def upload_image
    user_event_requirement.update_attributes upload_image_params
  end

  def check_requirement
    user_event_requirement.update_attributes check_requirement_params
  end

  private

  def check_requirement_params
    params.require(:user_event_requirement).permit :id, :user_id, :event_id,
      :deadline, :requirement_id, :verified,
      images_attributes: [:id, :file, :file_cache, :_destroy]
  end

  def upload_image_params
    params.require(:user_event_requirement).permit :id, :user_id, :event_id,
      :requirement_id, images_attributes: [:id, :file, :file_cache, :_destroy]
  end

  def find_user_event_requirement
    @user_event_requirement = UserEventRequirement.find_by id: params[:id]
  end
end

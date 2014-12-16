require 'test_helper'

class StatisticsControllerTest < ActionController::TestCase
  setup do
    @statistic = statistics(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:statistics)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create statistic" do
    assert_difference('Statistic.count') do
      post :create, statistic: { author: @statistic.author, category: @statistic.category, id: @statistic.id, sentence: @statistic.sentence, source: @statistic.source }
    end

    assert_redirected_to statistic_path(assigns(:statistic))
  end

  test "should show statistic" do
    get :show, id: @statistic
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @statistic
    assert_response :success
  end

  test "should update statistic" do
    patch :update, id: @statistic, statistic: { author: @statistic.author, category: @statistic.category, id: @statistic.id, sentence: @statistic.sentence, source: @statistic.source }
    assert_redirected_to statistic_path(assigns(:statistic))
  end

  test "should destroy statistic" do
    assert_difference('Statistic.count', -1) do
      delete :destroy, id: @statistic
    end

    assert_redirected_to statistics_path
  end
end

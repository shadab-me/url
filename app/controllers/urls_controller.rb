require 'csv'    
class UrlsController < ApplicationController
  before_action :set_url, only: %i[ show edit update destroy ]

   def index
    @urls = Url.all
    if @urls
     respond_to do |format|
      format.json {render status: :ok, urls: @urls}
      format.csv {send_data @urls.to_csv, filename: "urls-#{Date.today}.csv" }
    end   
   else
       render json: @urls.errors, status: :unprocessable_entity 
     end
  end

  def redirect
     @link =  Url.find_by(shortId: params[:id])
     if(@link)
      @link.increment!(:numberOfClick)
      redirect_to @link[:longUrl]
  else
      render status: :ok, json: {error: "link is not available!"}
  end
  end

   

   def new
    @url = Url.new
  end

   def create
     @url = Url.new(url_params)
     respond_to do |format|
      if @url.save
         format.json { render :show, status: :created, location: @url, notice: "Created Sucessfully." }
       else
         format.json { render json: @url.errors, status: :unprocessable_entity }
      end
    end
  end

   def update
    respond_to do |format|
      if @url.update(url_params)
         format.json { render :show, status: :ok, location: @url, notice: "Pined!" }
      else
         format.json { render json: @url.errors, status: :unprocessable_entity }
      end
    end
  end

  private
 
  def set_url
      @url = Url.find(params[:id])
    puts @url
    end

  def url_params
      params.require(:url).permit(:longUrl, :shortUrl, :shortId, :numberOfClick, :pin)
    end
    
end

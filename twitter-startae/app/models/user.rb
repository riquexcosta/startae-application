class User < ApplicationRecord
    
    # has_attached_file :picture, styles: { medium: "500x500>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
    
    # validates_attachment :picture, presence: true
    
    # do_not_validate_attachment_file_type :picture
end

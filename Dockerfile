FROM jekyll/jekyll
# Copy only Gemfile and Gemfile.lock to application folder
COPY Gemfile* /srv/jekyll/
COPY *.gemspec /srv/jekyll/

# Set current directory
WORKDIR /srv/jekyll

# Install gems with bundle
RUN bundle install

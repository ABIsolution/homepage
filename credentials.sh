#!/bin/bash
if [ -z "$1" ]; then
    echo "No profile provided."
    exit 1
fi

PROFILE="$1"
AWS_ACCESS_KEY_ID=$(aws configure get "$PROFILE.aws_access_key_id")
AWS_SECRET_ACCESS_KEY=$(aws configure get "$PROFILE.aws_secret_access_key")
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then echo "Could not locate credentials after export"
else
    export AWS_PROFILE=$PROFILE && echo AWS_PROFILE=$PROFILE
    export AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" && echo AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID"
    export AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" && echo AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY"
fi

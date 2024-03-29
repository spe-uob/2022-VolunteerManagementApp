from django.template.loader import render_to_string
from django.urls import reverse


def gen_subject_and_message(site_url, notification_type, action=None, context={}):
    """Renders the subject and message for given notification type.
    If an action is provided, the `action_url` and `admin_action_url` will
    also be provided as context to the message template.
    """
    # Generate URLs for the templates.
    admin_action_url = reverse('admin:actions_action_change', args=[action.id])
    context['action_url'] = f'{site_url}{action.get_absolute_url()}'
    context['admin_action_url'] = f'{site_url}{admin_action_url}'

    # Return the subject and message, removing line breaks from the subject.
    return (render_to_string(f'notifications/{notification_type.lower()}_subject.txt', context).replace('\n', ' ').replace('\r', ' '),
            render_to_string(f'notifications/{notification_type.lower()}_message.txt', context))

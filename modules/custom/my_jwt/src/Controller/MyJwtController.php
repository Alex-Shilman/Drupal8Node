<?php

namespace Drupal\my_jwt\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use \Firebase\JWT\JWT;

class MyJwtController
{
	public function verify(Request $request)
	{
		$response = new \stdclass();
		$private_tempstore = \Drupal::service('user.private_tempstore');
		$session = $private_tempstore->get('mymodule');
		$jwt = $request->query->get('token');
		error_log('---------TOKEN VERIFY---------');
		try{
			$decoded = $this->decode($jwt);
		}catch(\Firebase\JWT\ExpiredException $e){
			$response->error = $e->getMessage();
			error_log('ERROR ---------->' . $e->getMessage());
			return new JsonResponse($response);
		}
		
		if($decoded->jti != $session->get('jti')){
			$response->error = 'Unmatched unique JWT identifier';
			error_log('ERROR ---------->' . $response->error);
			return new JsonResponse($response);
		}
		
		$response->success = array(
			"status" => "OK",
			"session_jti" => $session->get('jti'),
			"decoded" => (array) $decoded

		);
		error_log('SUCCESS -------->' . $response->success);
		return new JsonResponse($response);
	}

	protected function decode($jwt)
	{
		$key = "jwt_secret_key_xxx";
		return JWT::decode($jwt, $key, array('HS256'));

	}

}